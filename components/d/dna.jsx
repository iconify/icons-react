import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sjrg0j4gt.css';
import '../../css/w/w3v9lfb2p.css';
import '../../css/h/hne6pl5nm.css';
import '../../css/v/v47gsrbdd.css';
import '../../css/r/rjas32bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="sjrg0j4gt wm-shadow"/><path class="w3v9lfb2p"/><path class="hne6pl5nm"/><path class="v47gsrbdd"/><path class="rjas32bmi wm-deco"/></g>`,
		"fallback": "withicons-sticker:dna",
	});
}

export default Component;
