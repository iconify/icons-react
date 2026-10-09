import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsku-rbch.css';
import '../../css/i/in_k0mbzy.css';
import '../../css/d/dc6crytza.css';
import '../../css/m/mndorw7al.css';
import '../../css/c/caf4nbbbt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsku-rbch"/><path class="in_k0mbzy"/><path class="dc6crytza"/><path class="mndorw7al"/><path class="caf4nbbbt"/>`,
		"fallback": "energy-icons:floating-wind-20-bold",
	});
}

export default Component;
