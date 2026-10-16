import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omiylpb6q.css';
import '../../css/c/c95t47bmk.css';
import '../../css/i/i-ild10ah.css';
import '../../css/f/fj4vt1kml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omiylpb6q"/><path class="c95t47bmk"/><path class="i-ild10ah"/><path class="fj4vt1kml"/>`,
		"fallback": "energy-icons:ball-valve-48",
	});
}

export default Component;
