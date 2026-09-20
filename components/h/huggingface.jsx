import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xula-6ban.css';
import '../../css/v/vtz50zjpg.css';
import '../../css/z/zawp9sbpf.css';
import '../../css/k/k6jq5_i3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xula-6ban"/><path class="vtz50zjpg"/><path class="zawp9sbpf"/><path class="k6jq5_i3t"/>`,
		"fallback": "pixel:huggingface",
	});
}

export default Component;
