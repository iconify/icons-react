import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqiziocuh.css';
import '../../css/e/e9p8wp9jq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqiziocuh"/><path class="e9p8wp9jq"/>`,
		"fallback": "selfhst:garmin-grafana",
	});
}

export default Component;
