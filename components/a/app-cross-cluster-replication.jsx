import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb78y2rwy.css';
import '../../css/t/tm8w-yurb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb78y2rwy"/><path class="ouiIcon__fillSecondary tm8w-yurb"/>`,
		"fallback": "oui:app-cross-cluster-replication",
	});
}

export default Component;
