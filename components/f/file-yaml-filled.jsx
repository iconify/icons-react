import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bul2c6-4f.css';
import '../../css/a/adspdac1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bul2c6-4f"/><path class="adspdac1j"/>`,
		"fallback": "tdesign:file-yaml-filled",
	});
}

export default Component;
