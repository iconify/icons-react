import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya43y5wia.css';
import '../../css/g/g0ni6vb5b.css';
import '../../css/r/r1okuabsg.css';
import '../../css/g/gfj36ibpb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya43y5wia"/><path class="g0ni6vb5b"/><path class="r1okuabsg"/><path class="gfj36ibpb"/>`,
		"fallback": "energy-icons:biomethane-plant-20",
	});
}

export default Component;
