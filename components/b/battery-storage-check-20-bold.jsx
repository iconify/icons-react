import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q59rnd5au.css';
import '../../css/d/dgoos-asp.css';
import '../../css/o/o34vcmwfm.css';
import '../../css/j/jy-kau6st.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q59rnd5au"/><path class="dgoos-asp"/><path class="o34vcmwfm"/><path class="jy-kau6st"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:battery-storage-check-20-bold",
	});
}

export default Component;
