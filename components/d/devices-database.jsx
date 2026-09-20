import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iobqtibmb.css';
import '../../css/m/mpwpx1vpl.css';
import '../../css/f/fk33t7eqs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iobqtibmb"/><path class="mpwpx1vpl"/><path class="fk33t7eqs"/>`,
		"fallback": "streamline-block:devices-database",
	});
}

export default Component;
