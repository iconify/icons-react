import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul91wnb8h.css';
import '../../css/i/igwqjib7w.css';
import '../../css/s/sykb_fpis.css';
import '../../css/b/byjz6nbph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul91wnb8h"/><path class="igwqjib7w"/><path class="sykb_fpis"/><path class="byjz6nbph"/>`,
		"fallback": "energy-icons:clover-20",
	});
}

export default Component;
