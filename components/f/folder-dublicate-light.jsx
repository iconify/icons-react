import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j73m3obrn.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l0bn-3b4l.css';
import '../../css/f/fckzwac5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGVWW5FbRM" class="j73m3obrn"/></defs><mask id="SVGNzmWYbOh" class="n1mjunbsu"><use href="#SVGVWW5FbRM"/></mask><g class="to-5kdesz"><use href="#SVGVWW5FbRM" mask="url(#SVGNzmWYbOh)" class="l0bn-3b4l"/><path class="fckzwac5u"/></g>`,
		"fallback": "lets-icons:folder-dublicate-light",
	});
}

export default Component;
