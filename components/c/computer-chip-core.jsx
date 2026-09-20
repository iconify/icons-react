import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk8vpbcvi.css';
import '../../css/b/b_4xs251q.css';
import '../../css/c/cutpm3zql.css';
import '../../css/c/cjpf05bsi.css';
import '../../css/m/mkjwrmbqt.css';
import '../../css/p/ptk9vwn0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bk8vpbcvi"/><path class="b_4xs251q"/><path class="cutpm3zql"/><path class="cjpf05bsi"/><path class="mkjwrmbqt"/><path class="ptk9vwn0j"/></g>`,
		"fallback": "streamline-ultimate-color:computer-chip-core",
	});
}

export default Component;
