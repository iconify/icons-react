import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snp287xku.css';
import '../../css/e/eog965m6o.css';
import '../../css/z/z_quw6cne.css';
import '../../css/f/f99tvmtdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snp287xku"/><path class="eog965m6o"/><path class="z_quw6cne"/><path class="f99tvmtdg"/>`,
		"fallback": "streamline-emojis:fire",
	});
}

export default Component;
