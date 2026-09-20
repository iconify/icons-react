import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzha7kbwu.css';
import '../../css/r/rnxbpvbaa.css';
import '../../css/h/hailjd1lv.css';
import '../../css/s/spi_97b6j.css';
import '../../css/c/ch8ckb40s.css';
import '../../css/l/l7w7dzxmb.css';
import '../../css/y/y4y1ctl7s.css';
import '../../css/a/apusru8xp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzha7kbwu"/><path class="rnxbpvbaa"/><path class="hailjd1lv"/><path class="spi_97b6j"/><path class="ch8ckb40s"/><path class="l7w7dzxmb"/><path class="y4y1ctl7s"/><path class="apusru8xp"/>`,
		"fallback": "openmoji:cat-with-tears-of-joy",
	});
}

export default Component;
