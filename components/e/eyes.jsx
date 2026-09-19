import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/lftmmacng.css';
import '../../css/k/karz80bzc.css';
import '../../css/a/a3fv3hq-a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPcxoUced"><g class="s9cl3zbei"><path clip-rule="evenodd" class="lftmmacng"/><path class="karz80bzc"/><path class="a3fv3hq-a"/></g></mask></defs><path mask="url(#SVGPcxoUced)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:eyes",
	});
}

export default Component;
