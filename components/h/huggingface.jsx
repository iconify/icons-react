import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3gqadqms.css';
import '../../css/x/x1cgi72hj.css';
import '../../css/b/bp6uewcuv.css';
import '../../css/o/o-yxj2bfk.css';
import '../../css/a/adbgsmbxj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3gqadqms"/><path class="x1cgi72hj"/><path clip-rule="evenodd" class="bp6uewcuv"/><path clip-rule="evenodd" class="o-yxj2bfk"/><path class="adbgsmbxj"/>`,
		"fallback": "devicon:huggingface",
	});
}

export default Component;
