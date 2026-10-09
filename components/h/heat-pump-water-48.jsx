import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yph0dvbon.css';
import '../../css/x/xezngbb0n.css';
import '../../css/g/gny111bnl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yph0dvbon"/><path class="xezngbb0n"/><path class="gny111bnl"/>`,
		"fallback": "energy-icons:heat-pump-water-48",
	});
}

export default Component;
