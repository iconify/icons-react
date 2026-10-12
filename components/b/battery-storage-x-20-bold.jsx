import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q59rnd5au.css';
import '../../css/d/dgoos-asp.css';
import '../../css/o/o34vcmwfm.css';
import '../../css/j/jy-kau6st.css';
import '../../css/l/l3qindbue.css';
import '../../css/f/fdtytm4ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q59rnd5au"/><path class="dgoos-asp"/><path class="o34vcmwfm"/><path class="jy-kau6st"/><path class="l3qindbue"/><path class="fdtytm4ox"/>`,
		"fallback": "energy-icons:battery-storage-x-20-bold",
	});
}

export default Component;
