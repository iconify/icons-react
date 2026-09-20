import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/t/tvgm5h.css';
import '../../css/k/k50i_c.css';
import '../../css/y/ydovum.css';
import '../../css/e/ebdxjv.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/d/d-cv4o0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew tvgm5h"/><path class="iw1iew k50i_c ydovum"/><path class="ebdxjv ydovum"/>`,
		"fallback": "line-md:file-upload",
	});
}

export default Component;
