import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvuddt06t.css';
import '../../css/x/x7k78fe0i.css';
import '../../css/i/iskyp3sfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvuddt06t"/><path class="x7k78fe0i"/><path class="iskyp3sfu"/>`,
		"fallback": "thesvg-color:colab-google",
	});
}

export default Component;
