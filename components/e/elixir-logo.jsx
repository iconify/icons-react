import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/idw7u8b_y.css';
import '../../css/q/qri7m8xsn.css';
import '../../css/e/e45ancb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="idw7u8b_y"/><path class="qri7m8xsn"/><path class="e45ancb7p"/></g>`,
		"fallback": "streamline-logos:elixir-logo",
	});
}

export default Component;
