import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o51294bng.css';
import '../../css/s/sey112v-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxuCMgbns"><g class="ufeehvblu"><path class="o51294bng"/><path class="sey112v-v"/></g></mask></defs><path mask="url(#SVGxuCMgbns)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:document-folder",
	});
}

export default Component;
