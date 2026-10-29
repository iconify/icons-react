import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx5jvdbvp.css';
import '../../css/n/nu888hqea.css';
import '../../css/p/p568a04xi.css';
import '../../css/m/m2lkdo9wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx5jvdbvp"/><path class="nu888hqea"/><path class="p568a04xi"/><path class="m2lkdo9wa"/>`,
		"fallback": "withicons-bauhaus:bug",
	});
}

export default Component;
