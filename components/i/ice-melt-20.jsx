import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzhy174bn.css';
import '../../css/t/t70ittbnx.css';
import '../../css/c/c6hof6utt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzhy174bn"/><path class="t70ittbnx"/><path class="c6hof6utt"/>`,
		"fallback": "energy-icons:ice-melt-20",
	});
}

export default Component;
