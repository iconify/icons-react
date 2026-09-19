import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv2madb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gv2madb7w"/>`,
		"fallback": "griddy-icons:home-alt-02",
	});
}

export default Component;
