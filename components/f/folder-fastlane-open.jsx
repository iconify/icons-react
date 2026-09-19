import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/o/omkt5tb6l.css';
import '../../css/b/bbvrevbek.css';
import '../../css/e/eepb1yo7q.css';
import '../../css/t/tund_j90b.css';
import '../../css/s/s_3e4tbqh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><path class="omkt5tb6l"/><path class="bbvrevbek"/><path class="eepb1yo7q"/><path class="tund_j90b"/><path class="s_3e4tbqh"/>`,
		"fallback": "catppuccin:folder-fastlane-open",
	});
}

export default Component;
