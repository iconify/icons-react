import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8_v07a_t.css';
import '../../css/l/lnl964nao.css';
import '../../css/z/z4zklhbom.css';
import '../../css/y/yzrr_8gta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8_v07a_t"/><path class="lnl964nao"/><path clip-rule="evenodd" class="z4zklhbom"/><path class="yzrr_8gta"/>`,
		"fallback": "solar:clapperboard-open-play-bold",
	});
}

export default Component;
