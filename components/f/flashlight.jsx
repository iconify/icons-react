import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/s2aj9_bcg.css';
import '../../css/c/ca4p52b-o.css';
import '../../css/k/ko2bb1nmy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7G5Vme8g"><g class="ufeehvblu"><path class="s2aj9_bcg"/><path class="ca4p52b-o"/><path class="ko2bb1nmy"/></g></mask></defs><path mask="url(#SVG7G5Vme8g)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:flashlight",
	});
}

export default Component;
