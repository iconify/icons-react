import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a89ur2b1j.css';
import '../../css/x/x15omc94k.css';
import '../../css/a/alf0loboi.css';
import '../../css/v/vr7_nrb-q.css';
import '../../css/s/s4wohcc5l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a89ur2b1j"/><path class="x15omc94k"/><circle class="alf0loboi"/><path class="vr7_nrb-q"/><path class="s4wohcc5l"/>`,
		"fallback": "openmoji:inaturalist",
	});
}

export default Component;
