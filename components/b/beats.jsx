import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy3pqcxku.css';
import '../../css/g/gy0kacpby.css';
import '../../css/q/qq36dbo-t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy3pqcxku"/><path class="gy0kacpby"/><path class="qq36dbo-t"/>`,
		"fallback": "devicon:beats",
	});
}

export default Component;
