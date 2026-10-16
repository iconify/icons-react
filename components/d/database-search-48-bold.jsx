import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbbfuqbum.css';
import '../../css/l/l7enx2kfy.css';
import '../../css/z/z9u6_hb0a.css';
import '../../css/n/nzvyk8_7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbbfuqbum"/><path class="l7enx2kfy"/><path class="z9u6_hb0a"/><path class="nzvyk8_7m"/>`,
		"fallback": "energy-icons:database-search-48-bold",
	});
}

export default Component;
