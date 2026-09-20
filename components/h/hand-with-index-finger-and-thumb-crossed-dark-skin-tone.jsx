import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srs9hjd-l.css';
import '../../css/m/m0zlgvbqf.css';
import '../../css/p/p4vjspaxo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="srs9hjd-l"/><path class="m0zlgvbqf"/><path class="p4vjspaxo"/>`,
		"fallback": "openmoji:hand-with-index-finger-and-thumb-crossed-dark-skin-tone",
	});
}

export default Component;
