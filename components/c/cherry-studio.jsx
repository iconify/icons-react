import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaahlrc3c.css';
import '../../css/a/aqdf5vb7x.css';
import '../../css/d/d43wkrl0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaahlrc3c"/><path class="aqdf5vb7x"/><path class="d43wkrl0d"/>`,
		"fallback": "thesvg-color:cherry-studio",
	});
}

export default Component;
