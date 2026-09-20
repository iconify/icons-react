import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s684qkqgc.css';
import '../../css/g/g_3przbai.css';
import '../../css/x/xu_goixyk.css';
import '../../css/i/irwfctnju.css';
import '../../css/l/ly6v3nbkd.css';
import '../../css/g/gy1o2w38c.css';
import '../../css/m/m8p7zbc6g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s684qkqgc"/><path class="g_3przbai"/><path class="xu_goixyk"/><path class="irwfctnju"/><path class="ly6v3nbkd"/><path class="gy1o2w38c"/><path class="m8p7zbc6g"/>`,
		"fallback": "streamline-emojis:basketball",
	});
}

export default Component;
