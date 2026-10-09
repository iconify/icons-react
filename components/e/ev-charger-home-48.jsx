import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaei814vi.css';
import '../../css/x/xwqlmeb2f.css';
import '../../css/i/i10hk57ox.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaei814vi"/><path class="xwqlmeb2f"/><path class="i10hk57ox"/>`,
		"fallback": "energy-icons:ev-charger-home-48",
	});
}

export default Component;
