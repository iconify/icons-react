import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_71-fb8o.css';
import '../../css/g/gg06_sb0j.css';
import '../../css/u/ut5psuaky.css';
import '../../css/p/pz2zo8bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_71-fb8o"/><path class="gg06_sb0j"/><path class="ut5psuaky"/><path class="pz2zo8bph"/>`,
		"fallback": "bxs:coin-stack",
	});
}

export default Component;
