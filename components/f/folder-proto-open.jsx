import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1crshb5u.css';
import '../../css/m/m7eao3b3n.css';
import '../../css/p/pdp-khgvt.css';
import '../../css/p/p--k-fr3e.css';
import '../../css/d/drjz59bdd.css';
import '../../css/l/lku96obpx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1crshb5u"/><g class="m7eao3b3n"><path transform="matrix(.5672 0 0 .62953 6.734 6.975)" class="pdp-khgvt"/><path transform="matrix(.5672 0 0 .62953 6.734 6.975)" class="p--k-fr3e"/><path transform="matrix(.5672 0 0 .62953 6.734 6.975)" class="drjz59bdd"/><path transform="matrix(.5672 0 0 .62953 6.734 6.975)" class="lku96obpx"/></g>`,
		"fallback": "catppuccin:folder-proto-open",
	});
}

export default Component;
