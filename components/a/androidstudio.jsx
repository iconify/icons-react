import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et8aabb_z.css';
import '../../css/a/akwv6qb5q.css';
import '../../css/v/v539uowyg.css';
import '../../css/o/oqolilywl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et8aabb_z"/><path class="akwv6qb5q"/><path class="v539uowyg"/><circle class="oqolilywl"/>`,
		"fallback": "devicon-plain:androidstudio",
	});
}

export default Component;
