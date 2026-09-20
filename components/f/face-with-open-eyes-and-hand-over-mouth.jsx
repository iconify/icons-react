import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/y/y-3e0yqgt.css';
import '../../css/n/nobrgtbws.css';
import '../../css/w/w9t_aghez.css';
import '../../css/l/lyxdkqbiv.css';
import '../../css/t/t5rocnbos.css';
import '../../css/f/fzox62bir.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="y-3e0yqgt"/><path class="nobrgtbws"/></g><path class="w9t_aghez"/><path class="lyxdkqbiv"/><path class="t5rocnbos"/><path class="fzox62bir"/>`,
		"fallback": "openmoji:face-with-open-eyes-and-hand-over-mouth",
	});
}

export default Component;
