import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za38b7bre.css';
import '../../css/y/yqtag0btf.css';
import '../../css/v/v12bizbqe.css';
import '../../css/u/uwnvacbei.css';
import '../../css/i/ibfy2lulz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow za38b7bre"/><path class="wm-k yqtag0btf"/><path class="v12bizbqe wm-k"/><path class="uwnvacbei wm-a"/><path class="ibfy2lulz wm-a"/>`,
		"fallback": "withicons-pastel:audio-lines",
	});
}

export default Component;
