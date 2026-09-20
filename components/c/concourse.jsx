import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk20u1a4q.css';
import '../../css/h/hbllqccic.css';
import '../../css/s/sua4k-bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<clipPath id="SVGJBnm7b0g"><path class="vk20u1a4q"/></clipPath><g clip-path="url(#SVGJBnm7b0g)" transform="translate(1.036 1.05)scale(.9137)" class="hbllqccic"><path class="sua4k-bnu"/></g>`,
		"fallback": "material-icon-theme:concourse",
	});
}

export default Component;
