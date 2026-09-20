import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7x5h9bzy.css';
import '../../css/x/xngc3ulnv.css';
import '../../css/f/fv87_ubng.css';
import '../../css/b/b4i6z6bsf.css';
import '../../css/g/g6cxb9b9r.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7x5h9bzy"/><path class="xngc3ulnv"/><path class="fv87_ubng"/><path class="b4i6z6bsf"/><path class="g6cxb9b9r"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:egypt",
	});
}

export default Component;
