import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsrq7dtpz.css';
import '../../css/o/oto4ucbif.css';
import '../../css/i/iek1ggn7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsrq7dtpz"/><path class="oto4ucbif"/><path class="iek1ggn7p"/>`,
		"fallback": "stash:envelope-at",
	});
}

export default Component;
