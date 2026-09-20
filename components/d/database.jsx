import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp6bi8wch.css';
import '../../css/z/zt78mr5_d.css';
import '../../css/u/ud65yub8l.css';
import '../../css/k/ktn4yab2i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp6bi8wch"/><path class="zt78mr5_d"/><path class="ud65yub8l"/><path class="ktn4yab2i"/>`,
		"fallback": "vaadin:database",
	});
}

export default Component;
