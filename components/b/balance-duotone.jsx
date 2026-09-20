import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik-i4x10n.css';
import '../../css/c/chowghc9o.css';
import '../../css/s/s9kf_ac-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik-i4x10n"/><path class="chowghc9o"/><path class="s9kf_ac-d"/>`,
		"fallback": "stash:balance-duotone",
	});
}

export default Component;
