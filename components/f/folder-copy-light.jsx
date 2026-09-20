import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-yh56yds.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vy9tf-bbi.css';
import '../../css/l/liewl6bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG4lMSXcMj" class="r-yh56yds"/></defs><mask id="SVGs93IBYCY" class="n1mjunbsu"><use href="#SVG4lMSXcMj"/></mask><g class="h01tyzbfu"><use href="#SVG4lMSXcMj" mask="url(#SVGs93IBYCY)" class="vy9tf-bbi"/><path class="liewl6bve"/></g>`,
		"fallback": "lets-icons:folder-copy-light",
	});
}

export default Component;
