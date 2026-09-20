import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/u/unud4sbtz.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v-ulqs9ho.css';
import '../../css/h/hz5z9dbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG8EkTve8u" class="n1mjunbsu"><path class="unud4sbtz"/></mask><g class="h01tyzbfu"><path mask="url(#SVG8EkTve8u)" class="v-ulqs9ho"/><path class="hz5z9dbox"/></g>`,
		"fallback": "lets-icons:folder-line-duotone-line",
	});
}

export default Component;
