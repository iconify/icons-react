import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxz9yh_wd.css';
import '../../css/w/why-rnbnl.css';
import '../../css/i/i112c1ruk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxz9yh_wd"/><path class="why-rnbnl"/><path class="i112c1ruk"/>`,
		"fallback": "vaadin:family",
	});
}

export default Component;
