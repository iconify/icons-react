import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7x5h9bzy.css';
import '../../css/x/xr638ub-f.css';
import '../../css/o/owgzb9byq.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7x5h9bzy"/><path class="xr638ub-f"/><path class="owgzb9byq"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:canada",
	});
}

export default Component;
