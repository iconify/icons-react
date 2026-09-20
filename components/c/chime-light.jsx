import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/i/i3j5q655c.css';
import '../../css/j/jureddast.css';

const viewBox = {"width":672,"height":193,"left":-203,"top":444};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="i3j5q655c"/><path class="jureddast"/></g>`,
		"fallback": "thesvg-color:chime-light",
	});
}

export default Component;
