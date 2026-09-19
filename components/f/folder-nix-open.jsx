import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1crshb5u.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mf-dksbui.css';
import '../../css/w/w_cp0x14q.css';
import '../../css/a/a-yumtb4a.css';
import '../../css/u/uqaclvzch.css';
import '../../css/v/v0k4b_zpz.css';
import '../../css/l/ld8xsfter.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1crshb5u"/><g class="t_2lkqbxb"><path class="mf-dksbui"/><path class="w_cp0x14q"/><path class="a-yumtb4a"/><path class="uqaclvzch"/><path class="v0k4b_zpz"/><path class="ld8xsfter"/></g>`,
		"fallback": "catppuccin:folder-nix-open",
	});
}

export default Component;
