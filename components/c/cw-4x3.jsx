import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbk05b36b.css';
import '../../css/d/d-pin6bmy.css';
import '../../css/v/va63p6btr.css';
import '../../css/h/huon7lbtd.css';
import '../../css/n/n1mjunbsu.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath><path id="SVGh7EF5c2g" class="d-pin6bmy"/></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.94)"><path class="va63p6btr"/><path class="huon7lbtd"/><use width="13500" height="9000" x="2" y="2" href="#SVGh7EF5c2g" transform="scale(42.67)" class="n1mjunbsu"/><use width="13500" height="9000" x="3" y="3" href="#SVGh7EF5c2g" transform="scale(56.9)" class="n1mjunbsu"/></g>`,
		"fallback": "flag:cw-4x3",
	});
}

export default Component;
